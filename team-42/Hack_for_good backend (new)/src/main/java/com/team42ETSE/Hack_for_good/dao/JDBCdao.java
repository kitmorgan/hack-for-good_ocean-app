package com.team42ETSE.Hack_for_good.dao;

import com.team42ETSE.Hack_for_good.model.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JDBCdao {

    JdbcTemplate jdbcTemplate;

    public JDBCdao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate =jdbcTemplate;
    }

    public List<User> listAll(){
        String sql = "SELECT * FROM events;";
        SqlRowSet result =  jdbcTemplate.queryForRowSet(sql);
        List<User> users = new ArrayList<>();
        while(result.next()){
            users.add(mapRowToUser(result));
        }
        return users;
    }

    public User mapRowToUser(SqlRowSet result){
        User user = new User();
        user.setUser_id(result.getInt("user_id"));
        user.setPassword(result.getString("password"));
        user.setUsername("username");
        return user;
    }
}
