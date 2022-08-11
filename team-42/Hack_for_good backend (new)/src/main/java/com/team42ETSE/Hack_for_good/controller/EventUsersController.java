package com.team42ETSE.Hack_for_good.controller;

import java.util.List;

import com.team42ETSE.Hack_for_good.model.Email;
import org.springframework.web.bind.annotation.*;

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
	public List<EventUsers> getEventUsers(@PathVariable int eventid) {
        return eventUserDao.getEventUsers(eventid);
    }

	@PostMapping(path = "/eventUsers/{eventid}/signup")
	public void addEventUser(@PathVariable int eventid, @RequestBody Email email){
		eventUserDao.addEventUsers(eventid, email);
	}

}
