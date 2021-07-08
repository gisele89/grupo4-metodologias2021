package com.metodologias.metodologias.controller.dto;

public class MaterialxCartoneroDTO {

	private Long idMaterialAcopio;
	private String nombre;
	private String img;
	private Double peso;
	private Double pesoAnterior;
	//private String cartonero;
	
	public MaterialxCartoneroDTO() {
	}
	
	public Long getIdMaterialAcopio() {
		return idMaterialAcopio;
	}
	
	public void setIdMaterialAcopio(Long idMaterialAcopio) {
		this.idMaterialAcopio = idMaterialAcopio;
	}
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public Double getPeso() {
		return peso;
	}
	public void setPeso(Double peso) {
		this.peso = peso;
	}
	public Double getPesoAnterior() {
		return pesoAnterior;
	}
	public void setPesoAnterior(Double pesoAnterior) {
		this.pesoAnterior = pesoAnterior;
	}
}
