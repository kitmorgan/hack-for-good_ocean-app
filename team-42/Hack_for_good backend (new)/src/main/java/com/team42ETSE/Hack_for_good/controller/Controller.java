package com.team42ETSE.Hack_for_good.controller;

import com.team42ETSE.Hack_for_good.dao.JDBCdao;
import com.team42ETSE.Hack_for_good.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Controller {
    private JDBCdao jdbCdao;

    public Controller(JDBCdao jdbCdao){
        this.jdbCdao = jdbCdao;
    }

//    @GetMapping(path = "/users")
//    public List<User> getUsers(){
//        return jdbCdao.listAll();
//    }
}
