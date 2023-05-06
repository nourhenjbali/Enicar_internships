package com.enicarthage.stage.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.enicarthage.stage.entity.Etudiant;

import java.util.Optional;

public interface StudentRepository  extends JpaRepository<Etudiant, Long>{
    Optional<Etudiant> findByEmail(String email);
}
