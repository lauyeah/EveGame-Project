package com.lauyeah.GameForum.service;

import com.lauyeah.GameForum.entity.Role;
import com.lauyeah.GameForum.entity.User;
import com.lauyeah.GameForum.form.ChangingUserPasswordForm;
import com.lauyeah.GameForum.form.ChangingUserRoleForm;
import com.lauyeah.GameForum.form.CreatingUserForm;
import com.lauyeah.GameForum.form.UpdatingUserForm;
import com.lauyeah.GameForum.repository.IUserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService implements IUserService {
    @Autowired
    private IUserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public Page<User> getAllUser(Pageable pageable) {
        return userRepository.findAll(pageable);
    }

    @Override
    public User getUserById(int id) {
        return userRepository.findById(id).get();
    }

    @Override
    public User getUserByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public void deleteUserById(int id) {
        userRepository.deleteById(id);
    }

    @Override
    public void createUser(CreatingUserForm form) {
        User user = modelMapper.map(form, User.class);
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        user.setPassword(encoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @Override
    public void updateUser(UpdatingUserForm form) {
        User user = modelMapper.map(form, User.class);

        User userTmp = userRepository.findById(form.getId()).get();
        user.setRole(userTmp.getRole());
        user.setJoinDate(userTmp.getJoinDate());
        user.setActivation(userTmp.isActivation());
        user.setPassword(userTmp.getPassword());

//        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
//        user.setPassword(encoder.encode(user.getPassword()));

        userRepository.save(user);
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public void changeRole(ChangingUserRoleForm form) {
        userRepository.changeRole(form.getId(), Role.valueOf(form.getNewRole()));
    }

    @Override
    public void activeUser(int id) {
        userRepository.activeUser(id);
    }

    @Override
    public boolean isUserIdExists(int id) {
        return userRepository.existsById(id);
    }

    @Override
    public boolean isAdminUserById(int id) {
        User user = userRepository.findById(id).get();
        if (user.getRole() == Role.ADMIN) {
            return true;
        } else {
            return false;
        }
    }

    @Override
    public boolean changeUserPassword(ChangingUserPasswordForm form) {
        BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
        boolean ck = encoder.matches(form.getOldPassword(), userRepository.findById(form.getId()).get().getPassword());
        if (ck & form.getNewPassword().equals(form.getConfirmPassword())) {

            // encode password
            String encodedPassword = encoder.encode(form.getNewPassword());

            userRepository.changePassword(form.getId(), encodedPassword);
            return true;
        }
        return false;
    }

    @Override
    public void lockUser(int id) {
        userRepository.lockUser(id);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return new org.springframework.security.core.userdetails.User(username, user.getPassword(), AuthorityUtils.createAuthorityList(user.getRole().toString()));
    }
}
