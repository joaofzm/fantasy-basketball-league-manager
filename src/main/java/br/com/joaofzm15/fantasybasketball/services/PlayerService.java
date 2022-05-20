package br.com.joaofzm15.fantasybasketball.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.joaofzm15.fantasybasketball.entities.Player;
import br.com.joaofzm15.fantasybasketball.entities.Team;
import br.com.joaofzm15.fantasybasketball.entities.Player;
import br.com.joaofzm15.fantasybasketball.respositories.PlayerRepository;

@Service
public class PlayerService {

	@Autowired
	private PlayerRepository repository;
	
	public List<Player> findAll(){
		return repository.findAll();
	}
	
	public Player findById(Long id) {
		Optional<Player> obj = repository.findById(id);
		return obj.get();
	}
	
	public Player insert(Player obj) {
		return repository.save(obj);
	}
	
	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	public Player update (Long id, Player obj) {
		Player entity = repository.getById(id);
		updateData(entity, obj);
		return repository.save(entity);
	}

	private void updateData(Player entity, Player obj) {
		entity.setName(obj.getName());
	}
}
