package br.com.joaofzm15.fantasybasketball.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.joaofzm15.fantasybasketball.entities.Game;
import br.com.joaofzm15.fantasybasketball.entities.Player;
import br.com.joaofzm15.fantasybasketball.entities.Team;

@Repository
public interface GameRepository extends JpaRepository<Game, Long>{

}
