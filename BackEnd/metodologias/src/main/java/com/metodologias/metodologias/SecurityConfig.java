package com.metodologias.metodologias;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@EnableWebSecurity

public class SecurityConfig extends WebSecurityConfigurerAdapter {
	//private final UserDetailsService userDetailsService;
	//private final BCryptPasswordEncoder bCryptPasswordEncoder;
	public static final String SIGN_UP_URL = "/users";
	 /*   
	public SecurityConfig(UserDetailsService userDetailsService, BCryptPasswordEncoder bCryptPasswordEncoder) {
	        this.userDetailsService = userDetailsService;
	        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
	}*/
	
    @Override
    protected void configure(HttpSecurity http) throws Exception {
    	
            http
             .cors().and()
             .csrf().disable()
             .authorizeRequests().antMatchers(HttpMethod.OPTIONS, "/**").permitAll().and()
             .authorizeRequests().antMatchers("/swagger-ui.html**", "/swagger-resources/**","/configuration/ui","/configuration/**","/v2/api-docs", "/webjars/**", "/web/**").permitAll().and()
             // public endpoints //
             .authorizeRequests().antMatchers(HttpMethod.GET, "/**").permitAll().and()//para el camunda 
             .authorizeRequests().antMatchers(HttpMethod.POST, "/**").permitAll().and()//para poder logear con camunda
            
             .authorizeRequests().antMatchers(HttpMethod.PUT, "/**").permitAll().and()
             .authorizeRequests().antMatchers(HttpMethod.DELETE, "/**").permitAll().and()
            
             // end public endpoints //
             .authorizeRequests().anyRequest().authenticated().and()
//             .addFilter(new JwtAuthenticationFilter(accountService, authenticationManager()))
//             .addFilter(new JwtAuthorizationFilter(authenticationManager()))
             .sessionManagement()
             .sessionCreationPolicy(SessionCreationPolicy.STATELESS);
        
    }	
/*
    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }*/
}    