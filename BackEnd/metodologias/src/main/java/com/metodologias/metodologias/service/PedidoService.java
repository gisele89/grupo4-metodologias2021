package com.metodologias.metodologias.service;

import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.metodologias.metodologias.controller.dto.PedidoDTO;
import com.metodologias.metodologias.persistance.Pedido;
import com.metodologias.metodologias.persistance.PedidoRepository;
import com.metodologias.metodologias.utils.Mhelper;



@Service
public class PedidoService {
	@Autowired
	PedidoRepository pedidoRepository;

	public List<PedidoDTO> getPedidos() {
		List<Pedido> pedidos = pedidoRepository.findAll();
		List<PedidoDTO> pedidosOut = new ArrayList<PedidoDTO>();
		for (Pedido pedido : pedidos) {
			pedidosOut.add(this.convertToPedidoDTO(pedido));
		}
		return pedidosOut;
	}
	
	public PedidoDTO convertToPedidoDTO(final Pedido pedido) {
		return Mhelper.modelMapper().map(pedido, PedidoDTO.class);
	}
}
