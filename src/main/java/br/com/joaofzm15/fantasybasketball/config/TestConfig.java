package br.com.joaofzm15.fantasybasketball.config;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

import br.com.joaofzm15.fantasybasketball.entities.Team;
import br.com.joaofzm15.fantasybasketball.respositories.TeamRepository;

@Configuration
@Profile("test")
public class TestConfig implements CommandLineRunner {

	@Autowired
	private TeamRepository teamRepository;

	@Override
	public void run(String... args) throws Exception {

		Team team1 = new Team(null, "Clippers");
		Team team2 = new Team(null, "Bucks");

		teamRepository.saveAll(Arrays.asList(team1, team2));
	}

}
