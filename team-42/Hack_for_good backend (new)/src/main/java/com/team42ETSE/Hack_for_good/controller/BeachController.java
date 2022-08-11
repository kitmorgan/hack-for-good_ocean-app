package com.team42ETSE.Hack_for_good.controller;

import com.team42ETSE.Hack_for_good.dao.BeachDao;
import com.team42ETSE.Hack_for_good.model.Beaches;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
public class BeachController {

    private BeachDao beachDao;

    public BeachController(BeachDao beachDao) {
        this.beachDao = beachDao;
    }

    @GetMapping("/beaches")
    public List<Beaches> getBeaches() {
        return beachDao.getBeaches();
    }


}
