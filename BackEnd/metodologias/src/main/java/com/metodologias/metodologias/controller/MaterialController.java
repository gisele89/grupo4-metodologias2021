package com.metodologias.metodologias.controller;

import java.util.List;
import org.apache.juli.logging.Log;
import org.apache.juli.logging.LogFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.metodologias.metodologias.controller.dto.MaterialDTO;
import com.metodologias.metodologias.service.MaterialService;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@RestController()
@RequestMapping("/materiales")
public class MaterialController {
	public static final Log LOGGER = LogFactory.getLog(MaterialController.class);
	private static final String INTERNAL_SERVER_ERROR = "Internal Server Error: ";
	@Autowired
	MaterialService materialService;

	@GetMapping("/")
	@ApiResponses({ @ApiResponse(code = 200, message = "Ok"),
			@ApiResponse(code = 500, message = "Internal Server Error") })
	public @ResponseBody ResponseEntity<List<MaterialDTO>> getMaterials() {
		try {
			return new ResponseEntity<List<MaterialDTO>>(materialService.getMaterials(), HttpStatus.OK);
		} catch (Exception e) {
			LOGGER.error(INTERNAL_SERVER_ERROR, e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("")
	@ApiResponses({
			@ApiResponse(code = 200, message = "Ok"),
			@ApiResponse(code = 500, message = "Internal Server Error")
	})
	public @ResponseBody ResponseEntity<MaterialDTO> insertUser(@RequestBody MaterialDTO material ){
		try {	
			return new ResponseEntity<MaterialDTO>(materialService.insertMaterial(material),HttpStatus.OK);
		}catch(Exception e) {
			LOGGER.error(INTERNAL_SERVER_ERROR,e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
}
