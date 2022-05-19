package br.com.joaofzm15.fantasybasketball.resources;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.joaofzm15.fantasybasketball.entities.Team;

@RestController
@RequestMapping(value = "/teams")
public class TeamResource {

	@GetMapping
	public ResponseEntity<Team> findAll(){
		Team t = new Team(1L, "Clippers");
		return ResponseEntity.ok().body(t);
	}
}
