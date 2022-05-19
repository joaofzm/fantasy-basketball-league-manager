package br.com.joaofzm15.fantasybasketball.respositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.com.joaofzm15.fantasybasketball.entities.Team;

public interface TeamRepository extends JpaRepository<Team, Long>{

}
