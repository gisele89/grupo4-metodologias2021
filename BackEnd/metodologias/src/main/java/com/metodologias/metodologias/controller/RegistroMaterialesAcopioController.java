package com.metodologias.metodologias.controller;

import java.util.List;

import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.metodologias.metodologias.controller.dto.MaterialAcopioDTO;
import com.metodologias.metodologias.service.MaterialAcopioService;
import com.metodologias.metodologias.controller.dto.MaterialxCartoneroDTO;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController()
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("/registro-material-acopio")
public class RegistroMaterialesAcopioController {
	public static final Log LOGGER = LogFactory.getLog(RegistroMaterialesAcopioController.class);
	private static final String INTERNAL_SERVER_ERROR = "Internal Server Error: ";
	
	@Autowired
	MaterialAcopioService materialAcopioService;
	
	
	@PostMapping("/")
	@ApiResponses({
			@ApiResponse(code = 200, message = "Ok"),
			@ApiResponse(code = 500, message = "Internal Server Error")
	})
	public @ResponseBody ResponseEntity<MaterialAcopioDTO> insertMaterialAcopio(@RequestBody MaterialAcopioDTO materialAcopio ){
		try {	
			return new ResponseEntity<MaterialAcopioDTO>(materialAcopioService.insertMaterialAcopio(materialAcopio),HttpStatus.OK);
		}catch(Exception e) {
			LOGGER.error(INTERNAL_SERVER_ERROR,e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	@GetMapping("/cartonero/{id}")
	@ApiResponses({ @ApiResponse(code = 200, message = "Ok"),
			@ApiResponse(code = 500, message = "Internal Server Error") })
	public @ResponseBody ResponseEntity<List<MaterialxCartoneroDTO>> getMaterialsByCartonero(@PathVariable("id") Long idCartonero) {
		try {
			return new ResponseEntity<List<MaterialxCartoneroDTO>>(materialAcopioService.getMaterialsByCartonero(idCartonero), HttpStatus.OK);
		} catch (Exception e) {
			LOGGER.error(INTERNAL_SERVER_ERROR, e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
}
