package com.team42ETSE.Hack_for_good.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.team42ETSE.Hack_for_good.dao.EventUserDAO;
import com.team42ETSE.Hack_for_good.model.EventUsers;

@RestController
@CrossOrigin
public class EventUsersController {
	
	private EventUserDAO eventUserDao;
	
	
	public EventUsersController(EventUserDAO eventUserDao) {
		this.eventUserDao = eventUserDao;
	}


	@GetMapping(path = "/eventUsers/{eventid}")
	public List<EventUsers> getEventUserss(@PathVariable int eventid) {
        return eventUserDao.getEventUsers(eventid);
    }

}
