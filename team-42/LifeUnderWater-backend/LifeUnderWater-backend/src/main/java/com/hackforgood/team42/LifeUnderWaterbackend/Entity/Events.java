package com.hackforgood.team42.LifeUnderWaterbackend.Entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;


@Entity
public class Events {
	 @Id
	 @SequenceGenerator(
	            name = "events_sequence",
	            sequenceName = "events_sequence",
	            allocationSize = 1
	    )
	    @GeneratedValue(
	            strategy = GenerationType.SEQUENCE,
	            generator = "events_sequence"
	    )
	private int eventId;
	private String name;
	private String description;
	private Date date;
	
	public Events() {}
	
	public Events(String name, String description, Date date) {
		super();
		this.name = name;
		this.description = description;
		this.date = date;
	}
	
	
	public int getEventId() {
		return eventId;
		
	}
	public void setEventId(int eventId) {
		this.eventId = eventId;
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
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}

	@Override
	public String toString() {
		return "Events [eventId=" + eventId + ", name=" + name + ", description=" + description + ", date=" + date
				+ "]";
	}
	
	
	
	//Beach beach;
	
	

}
