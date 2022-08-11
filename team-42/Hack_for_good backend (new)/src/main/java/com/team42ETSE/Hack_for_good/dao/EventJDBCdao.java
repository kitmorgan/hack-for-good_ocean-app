package com.team42ETSE.Hack_for_good.dao;

import com.team42ETSE.Hack_for_good.model.Event;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class EventJDBCdao implements EventDao{

    private final JdbcTemplate jdbcTemplate;

    public EventJDBCdao(JdbcTemplate jdbcTemplate){
        this.jdbcTemplate = jdbcTemplate;
    }
    @Override
    public List<Event> getEvents() {
        String sql = "Select * From events;";

        List<Event> events = new ArrayList<>();
        SqlRowSet result = jdbcTemplate.queryForRowSet(sql);
        while(result.next()){
            Event event = new Event();
            event.setEvent_id(result.getInt("event_id"));
            event.setBeach_id(result.getInt("beach_id"));
            event.setDate(result.getString("date"));
            event.setName(result.getString("name"));
            event.setDescription(result.getString("description"));
            events.add(event);
        }
        return events;
    }
}
