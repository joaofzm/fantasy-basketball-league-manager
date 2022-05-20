package br.com.joaofzm15.fantasybasketball.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.com.joaofzm15.fantasybasketball.entities.Game;
import br.com.joaofzm15.fantasybasketball.entities.Player;
import br.com.joaofzm15.fantasybasketball.entities.Team;
import br.com.joaofzm15.fantasybasketball.respositories.GameRepository;
import br.com.joaofzm15.fantasybasketball.respositories.PlayerRepository;
import br.com.joaofzm15.fantasybasketball.respositories.TeamRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

	@Autowired
	private TeamRepository teamRepository;
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private GameRepository gameRepository;

	@Override
	public void run(String... args) throws Exception {

		Team team1 = new Team(null, "Clippers");
		Team team2 = new Team(null, "Bucks");
		Team team3 = new Team(null, "Warriors");
		Team team4 = new Team(null, "Celtics");
		teamRepository.saveAll(Arrays.asList(team1, team2, team3, team4));
		
		Player p1 = new Player(null, "Reggie Jackson", team1);
		Player p2 = new Player(null, "Jrue Holiday", team2);
		Player p3 = new Player(null, "Stephen Curry", team3);
		Player p4 = new Player(null, "Robert Williams", team4);
		playerRepository.saveAll(Arrays.asList(p1,p2,p3,p4));
		
		Game g1 = new Game(null, 30, 5, 7, 2, 1, p1);
		Game g2 = new Game(null, 22, 4, 6, 3, 3, p2);
		Game g3 = new Game(null, 62, 6, 4, 1, 0, p3);
		Game g4 = new Game(null, 12, 3, 14, 1, 3, p4);
		gameRepository.saveAll(Arrays.asList(g1,g2,g3,g4));
		
		

	}

}
