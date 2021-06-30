package com.metodologias.metodologias.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.metodologias.metodologias.controller.dto.MaterialDTO;
import com.metodologias.metodologias.controller.dto.UsuarioDTO;
import com.metodologias.metodologias.persistance.Material;
import com.metodologias.metodologias.persistance.Usuario;
import com.metodologias.metodologias.persistance.UsuarioRepository;
import com.metodologias.metodologias.utils.Mhelper;

@Service
public class UsuarioService {
	@Autowired
	UsuarioRepository usuarioRepository;
	
	
	public UsuarioDTO insertUsuario(UsuarioDTO usuario) throws UsuarioDuplicated {
		Optional<Usuario> _usuario = usuarioRepository.findByEmail(usuario.getEmail());
		if (_usuario.isPresent()) 
			throw new UsuarioDuplicated();
		return this.convertToUsuarioDTO(usuarioRepository.save(this.convertToUsuario(usuario)));
	}
	
	public UsuarioDTO convertToUsuarioDTO(final Usuario usuario) {
		return Mhelper.modelMapper().map(usuario, UsuarioDTO.class);
	}

	public Usuario convertToUsuario(final UsuarioDTO usuario) {
		return Mhelper.modelMapper().map(usuario, Usuario.class);
	}
}
