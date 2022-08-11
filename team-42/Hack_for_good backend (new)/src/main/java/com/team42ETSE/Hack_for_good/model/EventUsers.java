package com.team42ETSE.Hack_for_good.model;

public class EventUsers {
	private int event_user_id;
	private int event_id;
	private String email;
	
	//constructors
	public EventUsers() {}

	public EventUsers(int event_id, String email) {
		super();
		this.event_id = event_id;
		this.email = email;
	}
	
	//getters and setters
	public int getEvent_user_id() {
		return event_user_id;
	}

	public void setEvent_user_id(int event_user_id) {
		this.event_user_id = event_user_id;
	}

	public int getEvent_id() {
		return event_id;
	}

	public void setEvent_id(int event_id) {
		this.event_id = event_id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	//to string
	@Override
	public String toString() {
		return "EventUsers [event_user_id=" + event_user_id + ", event_id=" + event_id + ", email=" + email + "]";
	}

}
