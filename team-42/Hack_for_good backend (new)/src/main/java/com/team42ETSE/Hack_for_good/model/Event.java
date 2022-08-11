package com.team42ETSE.Hack_for_good.model;

import java.util.Objects;

public class Event {

    private int event_id;
    private String name;
    private String description;
    private int beach_id;
    private String date;


    public int getEvent_id() {
        return event_id;
    }

    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getBeach_id() {
        return beach_id;
    }

    public void setBeach_id(int beach_id) {
        this.beach_id = beach_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Event)) return false;
        Event event = (Event) o;
        return getEvent_id() == event.getEvent_id() && getBeach_id() == event.getBeach_id() && getName().equals(event.getName()) && Objects.equals(getDescription(), event.getDescription()) && getDate().equals(event.getDate());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getEvent_id(), getName(), getDescription(), getBeach_id(), getDate());
    }
}
