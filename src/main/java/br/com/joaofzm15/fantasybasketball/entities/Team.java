package br.com.joaofzm15.fantasybasketball.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


public class Team implements Serializable {
	private static final long serialVersionUID = 1L;
	
	private Long id;
	private String name;
	
//	private List<Player> players = new ArrayList<>();
	
	public Team() {
		
	}

	public Team(Long id, String name) {
		this.id = id;
		this.name = name;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	@Override
	public int hashCode() {
		return Objects.hash(id);
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Team other = (Team) obj;
		return Objects.equals(id, other.id);
	}
	
	
	
	
}
