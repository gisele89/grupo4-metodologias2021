package com.metodologias.metodologias.controller;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.metodologias.metodologias.controller.dto.CartoneroDTO;
import com.metodologias.metodologias.controller.dto.MaterialDTO;
import com.metodologias.metodologias.service.CartoneroService;
import com.metodologias.metodologias.service.MaterialService;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController()
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("/cartonero")
public class CartoneroController {

	public static final Log LOGGER = LogFactory.getLog(CartoneroController.class);
	private static final String INTERNAL_SERVER_ERROR = "Internal Server Error: ";
	
	@Autowired
	CartoneroService cartoneroService;
	
	@PostMapping("/")
	@ApiResponses({
			@ApiResponse(code = 200, message = "Ok"),
			@ApiResponse(code = 500, message = "Internal Server Error")
	})
	public @ResponseBody ResponseEntity<CartoneroDTO> insertCartonero(@RequestBody CartoneroDTO cartonero ){
		try {	
			return new ResponseEntity<CartoneroDTO>(cartoneroService.insertCartonero(cartonero),HttpStatus.OK);
		}catch(Exception e) {
			LOGGER.error(INTERNAL_SERVER_ERROR,e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
