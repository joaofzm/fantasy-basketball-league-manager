package br.com.joaofzm15.fantasybasketball.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.joaofzm15.fantasybasketball.entities.Team;
import br.com.joaofzm15.fantasybasketball.services.TeamService;

@RestController
@RequestMapping(value = "/teams")
public class TeamResource {

	@Autowired
	private TeamService service;
	
	@GetMapping
	public ResponseEntity<List<Team>> findAll(){
		List<Team> list = service.findAll();
		return ResponseEntity.ok().body(list);
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<Team> findById(@PathVariable Long id){
		Team obj = service.findById(id);
		return ResponseEntity.ok().body(obj);
	}
	
}
