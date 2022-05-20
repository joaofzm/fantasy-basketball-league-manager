package br.com.joaofzm15.fantasybasketball.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.joaofzm15.fantasybasketball.entities.Game;
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
}
