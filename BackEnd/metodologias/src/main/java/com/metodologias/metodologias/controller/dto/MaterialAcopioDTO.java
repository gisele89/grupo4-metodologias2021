package com.metodologias.metodologias.controller.dto;

public class MaterialAcopioDTO {
	
	private Long idMaterialAcopio;
	private Double peso;
	private Double pesoAnterior;
	private Long idCartonero;
	private Long idMaterial;
	
	
	public Long getIdMaterial() {
		return idMaterial;
	}
	public void setIdMaterial(Long idMaterial) {
		this.idMaterial = idMaterial;
	}
	public Long getIdCartonero() {
		return idCartonero;
	}
	public void setIdCartonero(Long idCartonero) {
		this.idCartonero = idCartonero;
	}
	/*public String getCartonero() {
		return cartonero;
	}
	public void setCartonero(String cartonero) {
		this.cartonero = cartonero;
	}*/
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
