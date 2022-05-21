package br.com.joaofzm15.fantasybasketball.respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.joaofzm15.fantasybasketball.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}
