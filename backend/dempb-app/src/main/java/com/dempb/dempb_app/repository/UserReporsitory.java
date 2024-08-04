package com.dempb.dempb_app.repository;

import com.dempb.dempb_app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserReporsitory extends JpaRepository<User, Long> {



}
