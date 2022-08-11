package com.team42ETSE.Hack_for_good.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import com.team42ETSE.Hack_for_good.model.Event;
import com.team42ETSE.Hack_for_good.model.EventUsers;
@Component
public class EventUsersJDBCDao implements EventUserDAO {
	
	private final JdbcTemplate jdbcTemplate;

    public EventUsersJDBCDao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }

	@Override
	public List<EventUsers> getEventUsers(int event_id) {
		
		 String sql = "Select * From event_users where events_id = ?;";

	        List<EventUsers> eventUsers = new ArrayList<>();
	        SqlRowSet result = jdbcTemplate.queryForRowSet(sql, event_id);
	        while(result.next()){
	            EventUsers user = new EventUsers(); 
	            user.setEvent_id(result.getInt("event_id"));
	            user.setEmail(result.getString("email"));
	            eventUsers.add(user);
	        }
	        return eventUsers;
	}

}
