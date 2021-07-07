package com.metodologias.metodologias.persistance;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "cartonero")
public class Cartonero {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id_cartonero")
		private Long idCartonero;
		

		@Column(nullable = true)
		private String nombre;
		
		@Column(nullable = true)
		private String apellido;
		
		@Column(nullable = true)
		private String dni;
		
		@Column(nullable = true)
		private String direccion;
		
		@Column(nullable = true)
		private String nacimiento;
		
		@Column(nullable = true)
		private String vehiculo;

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
		
	
		
}
