package br.com.joaofzm15.fantasybasketball.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.joaofzm15.fantasybasketball.entities.Team;
import br.com.joaofzm15.fantasybasketball.respositories.TeamRepository;

@Service
public class TeamService {

	@Autowired
	private TeamRepository repository;
	
	public List<Team> findAll(){
		return repository.findAll();
	}
	
	public Team findById(Long id) {
		Optional<Team> obj = repository.findById(id);
		return obj.get();
	}
	
	public Team insert(Team obj) {
		return repository.save(obj);
	}
}
