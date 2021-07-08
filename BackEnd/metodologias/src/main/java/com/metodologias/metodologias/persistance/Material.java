package com.metodologias.metodologias.persistance;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.Type;

@Entity
@Table(name = "material")
public class Material {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_material")
	private Long idMaterial;
	

	@Column(nullable = true)
	private String nombre;
	
	@Column(nullable = true ,columnDefinition="MEDIUMTEXT")
	@Type(type="text")
	private String img;
	//@Column(name="LONG_DESCRIPTION" , length = 65535, columnDefinition="TEXT")
	
	
	@Column(nullable = true)
	private String descripcion;
	
	
	
	public String getImg() {
		return img;
	}

	public void setImg(String img) {
		this.img = img;
	}

	public String getDescripcion() {
		return descripcion;
	}

	public void setDescripcion(String descripcion) {
		this.descripcion = descripcion;
	}


	public Long getIdMaterial() {
		return idMaterial;
	}

	public void setIdMaterial(Long idMaterial) {
		this.idMaterial = idMaterial;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}


}
