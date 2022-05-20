package br.com.joaofzm15.fantasybasketball.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.joaofzm15.fantasybasketball.entities.Game;
import br.com.joaofzm15.fantasybasketball.entities.Player;
import br.com.joaofzm15.fantasybasketball.respositories.GameRepository;

@Service
public class GameService {

	@Autowired
	private GameRepository repository;
	
	public List<Game> findAll(){
		return repository.findAll();
	}
	
	public Game findById(Long id) {
		Optional<Game> obj = repository.findById(id);
		return obj.get();
	}
	
	public Game insert(Game obj) {
		return repository.save(obj);
	}
	
	public void delete(Long id) {
		repository.deleteById(id);
	}
	
	public Game update (Long id, Game obj) {
		Game entity = repository.getById(id);
		updateData(entity, obj);
		return repository.save(entity);
	}

	private void updateData(Game entity, Game obj) {
		entity.setPoints(obj.getPoints());
		entity.setAssists(obj.getAssists());
		entity.setRebounds(obj.getRebounds());
		entity.setSteals(obj.getSteals());
		entity.setBlocks(obj.getBlocks());
		entity.setPlayer(obj.getPlayer());
	}
}
