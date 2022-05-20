package br.com.joaofzm15.fantasybasketball.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.joaofzm15.fantasybasketball.entities.Team;
import br.com.joaofzm15.fantasybasketball.respositories.TeamRepository;
import br.com.joaofzm15.fantasybasketball.services.exceptions.ResourceNotFoundException;

@Service
public class TeamService {

	@Autowired
	private TeamRepository repository;
	
	public List<Team> findAll(){
		return repository.findAll();
	}
	
	public Team findById(Long id) {
		Optional<Team> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	public Team insert(Team obj) {
		return repository.save(obj);
	}
	
	public void delete(Long id) {
		repository.deleteById(id);
	}

	public Team update (Long id, Team obj) {
		Team entity = repository.getById(id);
		updateData(entity, obj);
		return repository.save(entity);
	}

	private void updateData(Team entity, Team obj) {
		entity.setName(obj.getName());
	}
}
