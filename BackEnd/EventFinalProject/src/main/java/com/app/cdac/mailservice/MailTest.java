package com.app.cdac.mailservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class MailTest {
	
	@Autowired EmailSenderService emailSenderService;

	@PostMapping("/mailsendtest")
	public void mailsend(@RequestBody String toEmail, String body,String subject) {
		emailSenderService.sendSimpleEmail(toEmail, body, subject) ;
	}

}
