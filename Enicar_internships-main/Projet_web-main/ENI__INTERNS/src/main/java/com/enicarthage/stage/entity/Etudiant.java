package com.enicarthage.stage.entity;
import com.enicarthage.stage.token.Token;
import jakarta.persistence.*;
import jdk.jfr.Enabled;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Enabled
@Entity
@Builder
@Table(name= "Etudiant")

public class Etudiant implements UserDetails {

	@Enumerated(EnumType.STRING)
	private Role role;

	@OneToMany(mappedBy = "user")
	private List<Token> tokens;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	    private int id;
	    private String firstName;
	    private String lastName;
	    private String email;
	    private String password;
	    private int tel;
	    private String niveau ; 
	    private String specialite ;
	public int getId() {
		return id;
	}
		public String getFirstName() {
			return firstName;
		}
		public void setFirstName(String firstName) {
			this.firstName = firstName;
		}
		public String getLastName() {
			return lastName;
		}
		public void setLastName(String lastName) {
			this.lastName = lastName;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}

	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return List.of(new SimpleGrantedAuthority(role.name()));
	}

	public String getPassword() {
			return password;
		}

	@Override
	public String getUsername() {
		return null;
	}

	@Override
	public boolean isAccountNonExpired() {
		return false;
	}

	@Override
	public boolean isAccountNonLocked() {
		return false;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		return false;
	}

	@Override
	public boolean isEnabled() {
		return false;
	}

	public void setPassword(String password) {
			this.password = password;
		}
		public int getTel() {
			return tel;
		}
		public void setTel(int tel) {
			this.tel = tel;
		}
		public String getNiveau() {
			return niveau;
		}
		public void setNiveau(String niveau) {
			this.niveau = niveau;
		}
		public String getSpecialite() {
			return specialite;
		}
		public void setSpecialite(String specialite) {
			this.specialite = specialite;
		} 
	    
	    
	        

}
