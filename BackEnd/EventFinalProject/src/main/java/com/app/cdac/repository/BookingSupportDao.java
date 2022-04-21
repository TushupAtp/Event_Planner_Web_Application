package com.app.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.cdac.entity.Booking;

public interface BookingSupportDao extends JpaRepository<Booking, Integer> {
	
	public List<Booking> findByBookingId(int bookingId);
	

}
