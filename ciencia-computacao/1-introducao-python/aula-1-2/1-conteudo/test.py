# from functools import lru_cache
from typing import Union, List, Dict
import csv
import re


def read(path: str) -> List[Dict]:
    jobs_dict = []
    with open(path, encoding="utf8") as file:
        path_reader = csv.DictReader(file)

        for jobs in path_reader:
            jobs_dict.append(jobs)

    return jobs_dict


# print(read("graduacao_unb.csv"))
# read("graduacao_unb.csv")


def get_unique_job_types(path: str) -> List[str]:
    jobs_read = read(path)
    job_list = dict()
    for job in jobs_read:
        if job["job_type"] not in job_list:
            job_list[job["job_type"]] = 1
        else:
            job_list[job["job_type"]] += 1
    return job_list


# print(get_unique_job_types("jobs.csv"))


def get_unique_industries(path: str) -> List[str]:
    jobs_read = read(path)
    industry_list = dict()
    for job in jobs_read:
        if job["industry"] != "":
            if job["industry"] not in industry_list:
                industry_list[job["industry"]] = 1
            else:
                industry_list[job["industry"]] += 1
    return industry_list


def get_max_salary(path: str) -> int:
    jobs_read = read(path)
    salary_max = list()
    new_salary_max = list()
    for job in jobs_read:
        if job["max_salary"] != "":
            salary_max.append(job["max_salary"])
    for salary in salary_max:
        if re.search(r"\d+", salary):
            new_salary_max.append(int(salary))
    return max(new_salary_max)


def get_min_salary(path: str) -> int:
    jobs_read = read(path)
    salary_min = list()
    new_salary_min = list()
    for job in jobs_read:
        if job["min_salary"] != "":
            salary_min.append(job["min_salary"])
    for salary in salary_min:
        if re.search(r"\d+", salary):
            new_salary_min.append(int(salary))
    return min(new_salary_min)


jobs_for_filter_by_job_type = [
    {"id": 1, "job_type": "PART_TIME"},
    {"id": 2, "job_type": "PART_TIME"},
    {"id": 3, "job_type": "OTHER"},
    {"id": 4, "job_type": "OTHER"},
    {"id": 5, "job_type": "FULL_TIME"},
    {"id": 6, "job_type": "FULL_TIME"},
    {"id": 7, "job_type": "CONTRACTOR"},
    {"id": 8, "job_type": "CONTRACTOR"},
    {"id": 9, "job_type": "TEMPORARY"},
    {"id": 10, "job_type": "TEMPORARY"},
    {"id": 11, "job_type": "INTERN"},
    {"id": 12, "job_type": "INTERN"},
]


def filter_by_job_type(jobs: List[Dict], job_type: str) -> List[Dict]:
    return [job for job in jobs if job_type in job["job_type"]]


jobs_mock_invalid = [
    {"max_salary": 0, "min_salary": 10},
    {"max_salary": 10, "min_salary": 100},
    {"max_salary": 10000, "min_salary": 200},
    {"max_salary": 15000, "min_salary": 0},
    {"max_salary": 1500, "min_salary": 0},
    {"max_salary": -1, "min_salary": 10},
]

jobs_mock_valid = [
    {"max_salary": 10000, "min_salary": 200},
    {"max_salary": 15000, "min_salary": 10000},
    {"max_salary": 1500, "min_salary": 0},
]


def matches_salary_range(job: Dict, salary: Union[int, str]) -> bool:
    conditionals = [
        "max_salary" not in job,
        "min_salary" not in job,
        job["min_salary"] == "" or job["max_salary"] == "",
        not str(job["min_salary"]).isdigit(),
        not str(job["max_salary"]).isdigit(),
        job["min_salary"] > job["max_salary"],
        not str(salary).lstrip("-").isnumeric(),
    ]
    for conditional in conditionals:
        if conditional:
            raise ValueError
    if int(job["min_salary"]) <= int(salary) <= int(job["max_salary"]):
        return True
    else:
        return False


def filter_by_salary_range(
    jobs: List[dict], salary: Union[str, int]
) -> List[Dict]:
    jobs_salary = list()
    conditionals = [
        salary is None and salary != 0,
        salary == "",
        salary == [],
        not str(salary).lstrip("-").isnumeric(),
    ]
    print(salary)
    for conditional in conditionals:
        if conditional:
            print(conditional)
            print(salary)
            return []

    for job in jobs:
        if int(job["min_salary"]) <= int(salary) <= int(job["max_salary"]):
            jobs_salary.append(job)
    return jobs_salary


def count_ocurrences(path: str, word: str) -> int:
    file = open(path, "r")
    read_data = file.read()
    word_count = read_data.lower().count(word.lower())
    return word_count


print(count_ocurrences("jobs.csv", "Javascript"))
