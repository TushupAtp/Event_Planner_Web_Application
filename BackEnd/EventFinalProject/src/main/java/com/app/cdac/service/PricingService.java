package com.app.cdac.service;

import java.util.List;

import com.app.cdac.entity.Pricing;

public interface PricingService {
	
	public Pricing insertPricings (Pricing pricing);
	
	public List<Pricing> getAllPricings();
	
	public List<Pricing> getPricingsByItems(String items);
	
	public List<Pricing> getPricingsById(int itemsId);
	
	public Pricing updatePricings(Pricing Pricing);
	
	public void deletePricing(int itemsId);

}
