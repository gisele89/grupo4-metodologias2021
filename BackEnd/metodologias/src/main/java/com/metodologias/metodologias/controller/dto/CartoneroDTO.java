package com.metodologias.metodologias.controller.dto;

import java.util.List;

import com.metodologias.metodologias.persistance.MaterialAcopio;

//nombre , apellido, DNI, dirección, fecha de nacimiento, datos del vehículo
public class CartoneroDTO {
	private Long idCartonero;
	private String nombre;
	private String apellido;
	private String dni;
	private String direccion;
	private String nacimiento;
	private String vehiculo;
	private List<MaterialAcopio> materiales;
	
	
	public List<MaterialAcopio> getMateriales() {
		return materiales;
	}

	public void setMateriales(List<MaterialAcopio> materiales) {
		this.materiales = materiales;
	}

	public Long getIdCartonero() {
		return idCartonero;
	}

	public void setIdCartonero(Long idCartonero) {
		this.idCartonero = idCartonero;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getApellido() {
		return apellido;
	}

	public void setApellido(String apellido) {
		this.apellido = apellido;
	}

	public String getDni() {
		return dni;
	}

	public void setDni(String dni) {
		this.dni = dni;
	}

	public String getDireccion() {
		return direccion;
	}

	public void setDireccion(String direccion) {
		this.direccion = direccion;
	}

	public String getNacimiento() {
		return nacimiento;
	}

	public void setNacimiento(String nacimiento) {
		this.nacimiento = nacimiento;
	}

	public String getVehiculo() {
		return vehiculo;
	}

	public void setVehiculo(String vehiculo) {
		this.vehiculo = vehiculo;
	}

	public CartoneroDTO() {
	
	}
	
}
