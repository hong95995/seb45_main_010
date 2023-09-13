package com.codestates.connectInstructor.teacher.mapper;

import com.codestates.connectInstructor.region.mapper.RegionMapper;
import com.codestates.connectInstructor.region.service.RegionService;
import com.codestates.connectInstructor.student.dto.StudentDto;
import com.codestates.connectInstructor.student.entity.Student;
import com.codestates.connectInstructor.subject.mapper.SubjectMapper;
import com.codestates.connectInstructor.subject.service.SubjectService;
import com.codestates.connectInstructor.teacher.dto.TeacherDto;
import com.codestates.connectInstructor.teacher.entity.Teacher;
import org.mapstruct.Mapper;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

@Mapper(componentModel = "spring")
public interface TeacherMapper {
    Teacher patchPasswordToTeacher(TeacherDto.PatchPassword requestBody);
    Teacher patchNameToTeacher(TeacherDto.PatchName requestBody);
    Teacher patchPhoneToTeacher(TeacherDto.PatchPhone requestBody);
    Teacher patchProfileImgToTeacher(TeacherDto.PatchProfileImg requestBody);
    Teacher patchIntroductionToTeacher(TeacherDto.PatchIntroduction requestBody);
    Teacher patchCareerToTeacher(TeacherDto.PatchCareer requestBody);
    Teacher patchLectureFeeToTeacher(TeacherDto.PatchLectureFee requestBody);
    Teacher patchOptionToTeacher(TeacherDto.PatchOption requestBody);
    Teacher patchOnLineToTeacher(TeacherDto.PatchOnLine requestBody);
    Teacher patchOffLineToTeacher(TeacherDto.PatchOffLine requestBody);
    Teacher patchAddressToTeacher(TeacherDto.PatchAddress requestBody);
    TeacherDto.PatchName teacherToPatchName(Teacher updated);
    TeacherDto.PatchPhone teacherToPatchPhone(Teacher updated);
    TeacherDto.PatchProfileImg teacherToPatchProfileImg(Teacher updated);
    TeacherDto.PatchIntroduction teacherToPatchIntroduction(Teacher updated);
    TeacherDto.PatchCareer teacherToPatchCareer(Teacher updated);
    TeacherDto.PatchLectureFee teacherToPatchLectureFee(Teacher updated);
    TeacherDto.PatchOption teacherToPatchOption(Teacher updated);
    TeacherDto.PatchOnLine teacherToPatchOnLine(Teacher updated);
    TeacherDto.PatchOffLine teacherToPatchOffLine(Teacher updated);
    TeacherDto.PatchAddress teacherToPatchAddress(Teacher updated);
    Teacher postToTeacher(TeacherDto.Post request);
    Teacher patchToTeacher(TeacherDto.Patch requestBody);
    default TeacherDto.Response teacherToTeacherResponse(Teacher teacher,
                                                         SubjectService subjectService,
                                                         RegionService regionService,
                                                         SubjectMapper subjectMapper,
                                                         RegionMapper regionMapper){
        if (teacher == null) {
            return null;
        } else {
            TeacherDto.Response response = new TeacherDto.Response();
            response.setId(teacher.getId());
            response.setEmail(teacher.getEmail());
            response.setName(teacher.getName());
            response.setTeacher(true);
            response.setPhone(teacher.getPhone());
            response.setProfileImg(teacher.getProfileImg());
            response.setIntroduction(teacher.getIntroduction());
            response.setCareer(teacher.getCareer());
            response.setLectureFee(teacher.getLectureFee());
            response.setOption(teacher.getOption());
            response.setOnLine(teacher.isOnLine());
            response.setOffLine(teacher.isOffLine());
            response.setAddress(teacher.getAddress());
            response.setOauth(teacher.isOauth());
            response.setSubjects(subjectMapper.subjectsToSubjectResponses(subjectService.findSubjectsWithTeacherId(teacher.getId())));
            response.setRegions(regionMapper.regionsToRegionResponses(regionService.findRegionsWithTeacherId(teacher.getId())));
            response.setLastLogin(teacher.getLastLogin());
            response.setLastModified(teacher.getLastModified());
            response.setCreatedAt(teacher.getCreatedAt());
            return response;
        }
    }
    default TeacherDto.Element teacherToTeacherElement(Teacher teacher,
                                                       SubjectService subjectService,
                                                       RegionService regionService,
                                                       SubjectMapper subjectMapper,
                                                       RegionMapper regionMapper){
        if (teacher == null) {
            return null;
        } else {
            TeacherDto.Element element = new TeacherDto.Element();
            element.setId(teacher.getId());
            element.setOnLine(teacher.isOnLine());
            element.setOffLine(teacher.isOffLine());
            element.setName(teacher.getName());
            element.setProfileImg(teacher.getProfileImg());
            element.setSubjects(subjectMapper.subjectsToSubjectResponses(subjectService.findSubjectsWithTeacherId(teacher.getId())));
            element.setRegions(regionMapper.regionsToRegionResponses(regionService.findRegionsWithTeacherId(teacher.getId())));
            element.setCreatedAt(teacher.getCreatedAt());
            return element;
        }
    }
    default List<TeacherDto.Element> teachersToTeacherElements(List<Teacher> teachers,
                                                       SubjectService subjectService,
                                                       RegionService regionService,
                                                       SubjectMapper subjectMapper,
                                                       RegionMapper regionMapper){
        if (teachers == null) {
            return null;
        } else {
            List<TeacherDto.Element> list = new ArrayList(teachers.size());
            Iterator var3 = teachers.iterator();

            while(var3.hasNext()) {
                Teacher teacher = (Teacher)var3.next();
                list.add(this.teacherToTeacherElement(teacher,
                        subjectService, regionService, subjectMapper, regionMapper));
            }

            return list;
        }
    }
}