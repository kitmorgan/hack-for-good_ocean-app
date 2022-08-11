package com.team42ETSE.Hack_for_good.controller;

import com.team42ETSE.Hack_for_good.dao.EventDao;
import com.team42ETSE.Hack_for_good.model.Event;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class EventController {

    private EventDao eventDao;

    public EventController(EventDao eventDao) {
        this.eventDao = eventDao;
    }

    @GetMapping(path = "/events")
    public List<Event> getEvents() {
        return eventDao.getEvents();
    }

    @PostMapping("/create-event")
    public Event createEvent(@RequestBody Event event) {
        return eventDao.createEvent(event);
    }
}

