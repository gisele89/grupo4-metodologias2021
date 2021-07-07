package com.metodologias.metodologias.controller.dto;

public class MaterialAcopioDTO {
	
	private Long idMaterialAcopio;
	private Double peso;
	private Double pesoAnterior;
	private String cartonero;
	
	public String getCartonero() {
		return cartonero;
	}
	public void setCartonero(String cartonero) {
		this.cartonero = cartonero;
	}
	public MaterialAcopioDTO() {
	
	}
	public Double getPesoAnterior() {
		return pesoAnterior;
	}
	public void setPesoAnterior(Double pesoAnterior) {
		this.pesoAnterior = pesoAnterior;
	}
	public Long getIdMaterialAcopio() {
		return idMaterialAcopio;
	}
	public void setIdMaterialAcopio(Long idMaterialAcopio) {
		this.idMaterialAcopio = idMaterialAcopio;
	}
	public Double getPeso() {
		return peso;
	}
	public void setPeso(Double peso) {
		this.peso = peso;
	}
	
	
	
}
