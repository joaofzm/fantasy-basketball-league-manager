package br.com.joaofzm15.fantasybasketball.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.com.joaofzm15.fantasybasketball.entities.Game;
import br.com.joaofzm15.fantasybasketball.entities.Player;
import br.com.joaofzm15.fantasybasketball.entities.Team;
import br.com.joaofzm15.fantasybasketball.entities.User;
import br.com.joaofzm15.fantasybasketball.resources.UserResource;
import br.com.joaofzm15.fantasybasketball.respositories.GameRepository;
import br.com.joaofzm15.fantasybasketball.respositories.PlayerRepository;
import br.com.joaofzm15.fantasybasketball.respositories.TeamRepository;
import br.com.joaofzm15.fantasybasketball.respositories.UserRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

	@Autowired
	private UserRepository userRepository;
	
	@Autowired
	private TeamRepository teamRepository;
	
	@Autowired
	private PlayerRepository playerRepository;
	
	@Autowired
	private GameRepository gameRepository;

	@Override
	public void run(String... args) throws Exception {
		
		User u1 = new User(null, "pg13", "1234");
		User u2 = new User(null, "greekFreak", "1234");
		User u3 = new User(null, "curry30", "1234");
		User u4 = new User(null, "timelord", "1234");
		userRepository.saveAll(Arrays.asList(u1, u2, u3, u4));

		Team t1 = new Team(null, "Clippers", u1);
		Team t2 = new Team(null, "Bucks", u2);
		Team t3 = new Team(null, "Warriors", u3);
		Team t4 = new Team(null, "Celtics", u4);
		teamRepository.saveAll(Arrays.asList(t1, t2, t3, t4));
		
		Player p1 = new Player(null, "Reggie Jackson", t1);
		Player p2 = new Player(null, "Jrue Holiday", t2);
		Player p3 = new Player(null, "Stephen Curry", t3);
		Player p4 = new Player(null, "Robert Williams", t4);
		playerRepository.saveAll(Arrays.asList(p1,p2,p3,p4));
		
		Game g1 = new Game(null, 30, 5, 7, 2, 1, p1);
		Game g2 = new Game(null, 22, 4, 6, 3, 3, p2);
		Game g3 = new Game(null, 62, 6, 4, 1, 0, p3);
		Game g4 = new Game(null, 12, 3, 14, 1, 3, p4);
		gameRepository.saveAll(Arrays.asList(g1,g2,g3,g4));
		
		

	}

}
