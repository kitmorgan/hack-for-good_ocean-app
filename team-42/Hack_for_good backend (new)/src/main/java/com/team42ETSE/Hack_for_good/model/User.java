package com.team42ETSE.Hack_for_good.model;

import java.util.Objects;

public class User {
    int user_id;
    String username;
    String password;

    public User() {};

    public int getUser_id() {
        return user_id;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof User)) return false;
        User user = (User) o;
        return getUser_id() == user.getUser_id() && getUsername().equals(user.getUsername());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getUser_id(), getUsername());
    }
}
