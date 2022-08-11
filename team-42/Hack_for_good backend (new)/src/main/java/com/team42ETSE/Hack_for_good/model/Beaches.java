package com.team42ETSE.Hack_for_good.model;

public class Beaches {
	
	private int beach_id;
	private String beach_name;
	private String location;
	private String img_link;
	
	//constructors
	public Beaches() {
		
	}
	public Beaches( String beach_name, String location, String img_link) {
		super();
		this.beach_name = beach_name;
		this.location = location;
		this.img_link = img_link;
	}
	
	//getters and setters
	public int getBeach_id() {
		return beach_id;
	}
	public void setBeach_id(int beach_id) {
		this.beach_id = beach_id;
	}
	public String getBeach_name() {
		return beach_name;
	}
	public void setBeach_name(String beach_name) {
		this.beach_name = beach_name;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getImg_link() {
		return img_link;
	}
	public void setImg_link(String img_link) {
		this.img_link = img_link;
	}
	
	//to string
	@Override
	public String toString() {
		return "Beaches [beach_id=" + beach_id + ", beach_name=" + beach_name + ", location=" + location + ", img_link="
				+ img_link + "]";
	}
	
	
	
	
	
	
	
	
	
	
	

}
