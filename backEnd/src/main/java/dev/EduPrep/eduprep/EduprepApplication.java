package dev.EduPrep.eduprep;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class EduprepApplication {

	public static void main(String[] args) {
		SpringApplication.run(EduprepApplication.class, args);
	}

	@GetMapping("/homeNotLogged")//This method is a get Endpoint
	public String apiRoot(){
		return "Hello World";
	}

}
