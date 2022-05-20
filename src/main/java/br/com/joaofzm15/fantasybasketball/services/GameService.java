package br.com.joaofzm15.fantasybasketball.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.stereotype.Service;

import br.com.joaofzm15.fantasybasketball.entities.Game;
import br.com.joaofzm15.fantasybasketball.entities.Player;
import br.com.joaofzm15.fantasybasketball.respositories.GameRepository;
import br.com.joaofzm15.fantasybasketball.services.exceptions.DatabaseException;
import br.com.joaofzm15.fantasybasketball.services.exceptions.ResourceNotFoundException;

@Service
public class GameService {

	@Autowired
	private GameRepository repository;
	
	public List<Game> findAll(){
		return repository.findAll();
	}
	
	public Game findById(Long id) {
		Optional<Game> obj = repository.findById(id);
		return obj.orElseThrow(() -> new ResourceNotFoundException(id));
	}
	
	public Game insert(Game obj) {
		return repository.save(obj);
	}
	
	public void delete(Long id) {
		try {
			repository.deleteById(id);
		} catch (EmptyResultDataAccessException e) {
			throw new ResourceNotFoundException(id);
		} catch (DataIntegrityViolationException e) {
			throw new DatabaseException(e.getMessage());
		}
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
