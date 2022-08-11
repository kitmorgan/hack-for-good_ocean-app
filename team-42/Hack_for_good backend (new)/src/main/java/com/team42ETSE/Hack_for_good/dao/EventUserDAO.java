package com.team42ETSE.Hack_for_good.dao;

import java.util.List;

import com.team42ETSE.Hack_for_good.model.EventUsers;

public interface EventUserDAO {
	
	public List<EventUsers> getEventUsers(int event_id);
	
	//public void addEventUsers(int event_id, String email);
	

}
