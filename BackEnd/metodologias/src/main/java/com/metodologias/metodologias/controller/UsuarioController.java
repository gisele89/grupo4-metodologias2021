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
import com.metodologias.metodologias.controller.dto.UsuarioDTO;
import com.metodologias.metodologias.controller.dto.UsuarioShortDTO;
import com.metodologias.metodologias.service.CartoneroService;
import com.metodologias.metodologias.service.MaterialNotFound;
import com.metodologias.metodologias.service.UsuarioNotFound;
import com.metodologias.metodologias.service.UsuarioService;
import com.metodologias.metodologias.service.UsuarioUnAuthorized;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
@RestController()
@CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
@RequestMapping("/usuario")
public class UsuarioController {

	public static final Log LOGGER = LogFactory.getLog(UsuarioController.class);
	private static final String INTERNAL_SERVER_ERROR = "Internal Server Error: ";
	
	@Autowired
	UsuarioService usuarioService;
	
	@PostMapping("/")
	@ApiResponses({
			@ApiResponse(code = 200, message = "Ok"),
			@ApiResponse(code = 500, message = "Internal Server Error")
	})
	public @ResponseBody ResponseEntity<UsuarioDTO> insertUsuario(@RequestBody UsuarioDTO usuario ){
		try {	
			return new ResponseEntity<UsuarioDTO>(usuarioService.insertUsuario(usuario),HttpStatus.OK);
		}catch(Exception e) {
			LOGGER.error(INTERNAL_SERVER_ERROR,e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@PostMapping("/autenticacion/")
	@ApiResponses({
			@ApiResponse(code = 200, message = "Ok"),
			@ApiResponse(code = 401, message = "contraseña erronea"),
			@ApiResponse(code = 404, message = "usuario no entontrado"),
			@ApiResponse(code = 500, message = "Internal Server Error")
	})
	public @ResponseBody ResponseEntity<UsuarioDTO> autenticarUsuario(@RequestBody UsuarioShortDTO usuario ){
		try {	
			return new ResponseEntity<UsuarioDTO>(usuarioService.autenticarUsuario(usuario),HttpStatus.OK);
		}catch(UsuarioUnAuthorized e) {
			LOGGER.error(INTERNAL_SERVER_ERROR,e);
			return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
		}catch(UsuarioNotFound e) {
			LOGGER.error(INTERNAL_SERVER_ERROR,e);
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}catch(Exception e) {
			LOGGER.error(INTERNAL_SERVER_ERROR,e);
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	
	
}
