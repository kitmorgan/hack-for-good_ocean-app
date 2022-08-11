package com.team42ETSE.Hack_for_good.dao;

import com.team42ETSE.Hack_for_good.model.Event;

import java.util.List;

public interface EventDao {

    public List<Event> getEvents();

    public Event createEvent(Event event);

}
